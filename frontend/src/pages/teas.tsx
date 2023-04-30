import React from 'react';
import { useGetTeas } from '../app/application/teaService';
import { TeaPage } from '../app/pages/TeaPage';

export default function Index(): JSX.Element {
    const { data: teaList, isLoading } = useGetTeas();
    return !isLoading ? <TeaPage teaList={teaList}/> : <>Loading teas</>;
}
