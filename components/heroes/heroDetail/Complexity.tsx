const Complexity = ({ complexityLevel }: { complexityLevel: number }) => {
  let levels = [1, 2, 3];

  return (
    <div>
      <p className="mt-8 text-lg font-bold uppercase tracking-widest text-[#959595]">
        Complexity
      </p>
      <div className="ml-1 mt-2 flex h-20 w-20 justify-between">
        {levels.map((value) =>
          complexityLevel-- > 0 ? (
            <div
              key={value}
              className="h-4 w-4 rotate-45 border border-solid border-[#fff] bg-[#fff]"
            ></div>
          ) : (
            <div
              key={value}
              className="h-4 w-4 rotate-45 border border-solid border-[#fff]"
            ></div>
          ),
        )}
      </div>
    </div>
  );
};

export default Complexity;
