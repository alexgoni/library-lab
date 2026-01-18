import { Link } from "react-router";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Link to="/use-form">1. useForm</Link>
      <Link to="/controller">2. Controller</Link>
      <Link to="/form-provider">3. FormProvider</Link>
    </div>
  );
}
