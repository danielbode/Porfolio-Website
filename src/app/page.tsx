import { redirect } from "next/navigation";

/** Root page — immediately redirects to the English locale. */
const RootPage = () => {
  redirect("/en");
};

export default RootPage;
