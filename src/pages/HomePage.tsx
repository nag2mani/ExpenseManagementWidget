import { useContext } from "react";
import { SimpleGrid, Text } from "@mantine/core";
import DisplayCard from "../components/DisplayCard";
import HistoryStack from "../components/HistoryStack";
import PageContainer from "../layout/PageContainer";
import PieChart from "../components/PieChart";
import CategoriesContext from "../store/CategoriesContext";

const HomePage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");

  return (
    <PageContainer>

      <SimpleGrid cols={3} style={{ justifyContent: "center" }}>
        <DisplayCard label="Income / Budget" amount={budget} color="blue.4" />
        <DisplayCard label="Balance" amount={budget - expenses} color="green.4" />
        <DisplayCard label="Expenses" amount={expenses} color="red.4" />
      </SimpleGrid>
      
      <SimpleGrid cols={2} style={{ justifyContent: "center" }}>
      <HistoryStack />
      <PieChart />
      </SimpleGrid>

    </PageContainer>
  );
};

export default HomePage;
