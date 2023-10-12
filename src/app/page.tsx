'use client';
import React, { useState } from 'react';
import BusinessList from '@/app/components/BusinessList';
import SearchBar from '@/app/components/SearchBar';
import Business from '@/app/components/Business';

const Page: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('best_match');

  const searchYelp = (term: string, location: string, sortBy: string) => {
    // Implemente a lógica de busca aqui
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        term={term}
        location={location}
        sortBy={sortBy}
        setTerm={setTerm}
        setLocation={setLocation}
        setSortBy={setSortBy}
        searchYelp={searchYelp}
      />
      <BusinessList />
      <Business
        name="Exemplo de Negócio"
        address="123 Exemplo St"
        city="Exemplo Cidade"
        state="EX"
        zipCode="12345"
        category="Categoria Exemplo"
        rating={4.5}
        reviewCount={100}
      />
    </div>
  );
};

export default Page;
