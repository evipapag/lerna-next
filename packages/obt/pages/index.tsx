import React from 'react';
import { CardContent } from '@pm/cards';
import { ExampleComponent } from '../components/ExampleComponent'

export default function Home() {
  return (
    <div>
      <ExampleComponent text="Evi"/>
      <CardContent>test</CardContent>
    </div>
  );
}