import { PropsWithChildren } from "react";
import isUrl from "is-url";
import { Link } from "react-router-dom";

export interface OwnProps {
  url: string;
  external?: boolean;
  id?: string;
  "aria-label"?: string;
}

const AdapterLink = ({
  url,
  external: isBlank = false,
  children,
  ...rest
}: PropsWithChildren<OwnProps>) => {
  if (isUrl(url)) {
    return (
      <a href={url} target={isBlank ? "_blank" : "_self"} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={url} {...rest}>
      {children}
    </Link>
  );
};
export default AdapterLink;
