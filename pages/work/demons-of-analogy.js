import Page from "../../components/page";

export default function ThisPage({}) {
  return (
    <Page>
      <iframe
        src="/doc/demons-of-analogy.pdf"
        className="h-viewer w-full"
      ></iframe>
    </Page>
  );
}
