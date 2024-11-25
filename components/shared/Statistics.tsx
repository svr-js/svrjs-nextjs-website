import { stats } from "@/constants";
import NumberTicker from "../widgets/num-tick";

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map(({ title, count }) => (
        <div key={title} className="space-y-2 text-center">
          <p className="text-3xl sm:text-4xl font-bold">
            <NumberTicker value={count} />+
          </p>
          <p className="text-xl text-muted-foreground">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
