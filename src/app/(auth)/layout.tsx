export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="satoshi">{children}</main>;
}
