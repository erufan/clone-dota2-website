interface Props {
  params: { hero: string };
}

const heroPage = ({ params }: Props) => {
  return <div>{params.hero}</div>;
};

export default heroPage;
