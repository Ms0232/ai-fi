import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>dashboard</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
