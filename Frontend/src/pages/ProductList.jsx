import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
const Container = styled.div``;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: 50px;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;
const Option = styled.option`
  font-weight: bold;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Pets:</FilterText>
          <Select defaultValue="pet" name="type" onChange={handleFilters}>
            <Option value="pet" disabled >Pet Type</Option>
            <Option>dog</Option>
            <Option>cat</Option>
            <Option>duck</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Pets:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        <Button />

      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
