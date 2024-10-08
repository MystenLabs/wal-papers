import Header from "../Header";
import Footer from "../Footer";
import CategoryListPage from "../../pages/CategoryListPage";
import { ICategoryListLayout } from "../../interfaces/ICategoryListLayout";

const CategoryListLayout: React.FC<ICategoryListLayout> = ({ collections }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow overflow-y-auto">
        {!collections ? (
          <CategoryListPage
            type={"CATEGORIES"}
            papers={[
              {
                id: "1",
                title: "Navigating Process Mining: A Case study using pm4py",
                authors: "Ali Jidi, László Kovács",
                link: `/abs/${2409.01294}`,
                categories: "Artificial Intelligence",
                arxiv_id: "2409.01294",
              },
              {
                id: "2",
                title: "Another Study in AI",
                authors: "John Doe, Jane Smith",
                link: `/abs/${2409.01295}`,
                categories: "Artificial Intelligence",
                arxiv_id: "2409.01295",
              },
            ]}
          />
        ) : (
          <CategoryListPage
            type={"COLLECTIONS"}
            categories={[
              {
                id: "Exploring the Edge of Artificial Intelligence Knowledge",
                label:
                  "Exploring the Edge of Artificial Intelligence Knowledge",
              },
              {
                id: "Curious Conjectures About Artificial Intelligence and Beyond",
                label:
                  "Curious Conjectures About Artificial Intelligence and Beyond",
              },
              {
                id: "Dynamic Systems and Fractals: A Mathematical Odyssey",
                label: "Dynamic Systems and Fractals: A Mathematical Odyssey",
              },
              {
                id: "The Math Behind the Cells: Unveiling Quantitative Biology Secrets",
                label:
                  "The Math Behind the Cells: Unveiling Quantitative Biology Secrets",
              },
              {
                id: "The Math Behind the Cells: Unveiling Quantitative Biology Secrets",
                label:
                  "The Math Behind the Cells: Unveiling Quantitative Biology Secrets",
              },
              {
                id: `Machine Learning's Dark Side: The Unseen Consequences`,
                label: `Machine Learning's Dark Side: The Unseen Consequences`,
              },
              {
                id: "From Adam Smith to AI: The Evolution of Theoretical Economics",
                label:
                  "From Adam Smith to AI: The Evolution of Theoretical Economics",
              },
              {
                id: "Beyond Black Swans: Exploring Quantitative Finance Frontiers",
                label:
                  "Beyond Black Swans: Exploring Quantitative Finance Frontiers",
              },
              {
                id: `Why Economics is Like Dating: It's All About Supply and Demand`,
                label: `Why Economics is Like Dating: It's All About Supply and Demand`,
              },
              {
                id: "The Spark of Genius: Exploring Electrical Engineering Frontiers",
                label:
                  "The Spark of Genius: Exploring Electrical Engineering Frontiers",
              },
            ]}
            papers={[
              {
                id: "1",
                title: "Navigating Process Mining: A Case study using pm4py",
                authors: "Ali Jidi, László Kovács",
                link: `/abs/${2409.01294}`,
                categories: "Artificial Intelligence",
                arxiv_id: "2409.01294",
              },
              {
                id: "2",
                title: "Another Study in AI",
                authors: "John Doe, Jane Smith",
                link: `/abs/${2409.01295}`,
                categories: "Artificial Intelligence",
                arxiv_id: "2409.01295",
              },
            ]}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryListLayout;
