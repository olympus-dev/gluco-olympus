import NextLink from "next/link";
import { Container } from "../container";

interface ILinkProps {
  href: string;
}

const Link = ({ href }: ILinkProps) => {
  return (
    <NextLink href={href} className="text-blue-800 underline">
      here
    </NextLink>
  );
};

export function BottomBadge() {
  return (
    <div className="bg-white pb-4 flex flex-col items-center text-xs text-center">
      <Container>
        <p>
          2024 © Digistore24 Inc. (United States) Inc. and/or its licensors.
          Review legal terms of use{" "}
          <Link href="https://www.digistore24.com/info/terms/2?lang=en" /> and
          privacy policy{" "}
          <Link href="https://www.digistore24.com/info/privacy/2?lang=en" />.
          Contact us{" "}
          <Link href="https://www.digistore24.com/info/contact/2?lang=en" />.
        </p>
      </Container>
    </div>
  );
}
