import { useParams } from "react-router";

export default function Team() {
  const params = useParams();
  return (
    <>
      <h1>
        Team Overview - Team ID: {params.teamId} | Group ID: {params.groupId}
      </h1>
      <title>
        {`Team Overview - Team ID: ${params.teamId} | Group ID: ${params.groupId}`}
      </title>
    </>
  );
}
