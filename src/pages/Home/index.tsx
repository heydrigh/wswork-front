import useGetAllCars, {
  getCarsQueryKey,
} from '@services/queries/useGetAllCars';
import CarList from '@components/CarList';
import CardSkeleton from '@components/CardSkeleton';
import { groupBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { DatePicker, Divider, Modal, Row, Col, message } from 'antd';
import Button from '@components/Button';
import Input from '@components/Input';
import { FormikProvider, useFormik } from 'formik';
import { createCarValidationSchema } from '@schemas/CreateCar';
import useCreateCar from '@services/mutations/useCreateCar';
import { CreateCarDTO } from '@services/api/types';
import { useQueryClient } from 'react-query';
import * as S from './styles';
import { generateRandomID } from './utils';
import { initialValues } from './constants';

function Home() {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const [modalOpen, setModalOpen] = useState(false);
  const { data: cars, isLoading: isLoadingCars } = useGetAllCars();

  const { mutate: createCar, isLoading: createCarsLoading } = useCreateCar({
    onSuccess: () => {
      setModalOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Carro criado com sucesso',
      });
      queryClient.invalidateQueries(getCarsQueryKey);
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Houve um erro ao tentar criar seu carro',
      });
    },
  });

  const formik = useFormik({
    initialValues,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onSubmit: handleSubmit,
    validationSchema: createCarValidationSchema,
  });

  function handleSubmit(values: typeof initialValues) {
    const newCarID = generateRandomID();
    const newModelId = generateRandomID();
    const timestamp = Math.floor(Date.now() / 1000);

    const newCar = {
      ano: +values.year,
      brand: values.brand,
      combustivel: values.fuel,
      cor: values.color,
      nome_modelo: values.modelName,
      num_portas: +values.doorsQuantity,
      valor: +values.price,
      id: newCarID,
      modelo_id: newModelId,
      timestamp_cadastro: timestamp,
    } satisfies CreateCarDTO;
    formik.resetForm();
    createCar(newCar);
  }

  const handleOkButton = useCallback(() => {
    formik.submitForm();
  }, [formik]);

  const handleCancel = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleAddButton = useCallback(() => {
    setModalOpen(true);
  }, []);

  const groupedCars = useMemo(() => groupBy(cars, 'brand'), [cars]);

  const handleDatePicker = useCallback(
    (dateString: string) => {
      formik.setFieldValue('year', dateString);
    },
    [formik],
  );

  return (
    <S.Container>
      {contextHolder}
      <Button onClick={handleAddButton}>Adicionar novo carro</Button>
      <S.ContentWrapper>
        {isLoadingCars && <CardSkeleton />}
        {Object.entries(groupedCars).map(([brand, carsByBrand]) => (
          <S.BrandsWrapper key={brand}>
            <S.Brand>{brand}</S.Brand>
            <CarList cars={carsByBrand} />
            <Divider />
          </S.BrandsWrapper>
        ))}
      </S.ContentWrapper>
      <FormikProvider value={formik}>
        <Modal
          title='Cadastrar novo carro'
          onOk={handleOkButton}
          onCancel={handleCancel}
          open={modalOpen}
          cancelText='Cancelar'
          okText='Salvar'
          confirmLoading={createCarsLoading}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='Corolla'
                name='modelName'
                label='Nome do modelo'
              />
            </Col>
            <Col span={12}>
              <Input placeholder='Prata' name='color' label='Cor' />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input placeholder='Gasolina' name='fuel' label='Combustível' />
            </Col>
            <Col span={12}>
              <Input
                placeholder='R$ 2000'
                name='price'
                label='Preço'
                mask='R$ 999,999.99'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input placeholder='Mitsubishi' name='brand' label='Marca' />
            </Col>
            <Col span={12}>
              <Input
                placeholder='4'
                name='doorsQuantity'
                label='Quantidade de portas'
                type='number'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <S.DatePickerWrapper>
                <S.Label htmlFor='year'>Ano</S.Label>
                <DatePicker
                  status={formik.errors.year ? 'error' : ''}
                  picker='year'
                  name='year'
                  placeholder='2020'
                  onChange={(_, date) => handleDatePicker(date)}
                />
                {formik.errors.year && (
                  <S.ErrorMessage>{formik.errors.year}</S.ErrorMessage>
                )}
              </S.DatePickerWrapper>
            </Col>
          </Row>
        </Modal>
      </FormikProvider>
    </S.Container>
  );
}

export default Home;
