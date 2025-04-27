import { getImprint } from "@/actions";

export default async function Imprint() {
  const data = await getImprint();
  return (
    <div className="privacy_policy">
      <h1 className="privacy_policy_title">{data?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data?.content }}
        className="privacy_policy_content"
      ></div>
    </div>
  );
}
