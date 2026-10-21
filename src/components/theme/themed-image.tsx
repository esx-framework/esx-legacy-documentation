// Both variants are in the markup and the theme class on <html> picks one,
// so the logo shows before hydration and never flashes the wrong one.
export function ThemedImage() {
  return (
    <span className="esx-logo">
      <img className="esx-logo-light" src="/esx-logo-light.png" alt="ESX" width={77} height={28} />
      <img className="esx-logo-dark" src="/esx-logo-dark.png" alt="ESX" width={77} height={28} />
    </span>
  );
}
