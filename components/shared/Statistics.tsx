import { stats } from "@/constants";
import NumTicker from "../widgets/num-tick";

const Statistics = () => {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ title, count }) => (
          <div key={title} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {count}
              {/* <NumTicker value={count} /> */}
            </h2>
            <p className="text-xl text-muted-foreground">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
