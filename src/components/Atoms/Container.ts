import styled from "styled-components";
import { BREAKPOINT, size } from "../tokens";

export interface IContainerProps {
  maxWidth?: string;
}

const Container = styled.div<IContainerProps>`
  max-width: ${({ maxWidth = BREAKPOINT.large }) => maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${size.single};
  padding-right: ${size.single};
`;

export default Container;
