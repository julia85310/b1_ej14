'use client';
import Dropdown from './Dropdown';

export default function Home() {
  const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
  return (
    <Dropdown opciones = {opciones}></Dropdown>
  );
}
