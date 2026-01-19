function LoadingSR({ text = "Loading..." }: { text?: string }) {
  return (
    <span className="sr-only" aria-live="polite" role="status">
      {text}
    </span>
  );
}

export default LoadingSR;
