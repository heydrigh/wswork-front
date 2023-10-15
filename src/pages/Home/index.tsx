import useGetAllCars from '@services/queries/useGetAllCars';
import CarList from '@components/CarList';
import CardSkeleton from '@components/CardSkeleton';
import { groupBy } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { DatePicker, Divider, Modal, Row, Col } from 'antd';
import Button from '@components/Button';
import Input from '@components/Input';
import { FormikProvider, useFormik } from 'formik';
import { createCarValidationSchema } from '@schemas/CreateCar';
import * as S from './styles';

function Home() {
  const initialValues = {
    year: '',
    fuel: '',
    doorsQuantity: '',
    color: '',
    modelName: '',
    price: '',
  };

  const handleSubmit = useCallback((values: typeof initialValues) => {
    console.log(values);
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: createCarValidationSchema,
  });

  const { data: cars, isLoading } = useGetAllCars();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOkButton = useCallback(() => {
    // setModalOpen(false);
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
      <Button onClick={handleAddButton}>Adicionar novo carro</Button>
      <S.ContentWrapper>
        {isLoading && <CardSkeleton />}
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
                type='number'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='4'
                name='doorsQuantity'
                label='Quantidade de portas'
                type='number'
              />
            </Col>
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
