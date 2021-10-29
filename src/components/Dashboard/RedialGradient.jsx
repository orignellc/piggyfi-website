export function RedialGradient({ className }) {
  className += " absolute";

  return <div style={{ backgroundImage }} {...{ className }} />;
}

const backgroundImage =
  "radial-gradient(closest-side at 60% 56%, rgba(255, 207, 68, 0.5), transparent 90%), " +
  "radial-gradient(closest-side at 40% 76%, rgba(137, 19, 192, 0.5), transparent 90%)";
