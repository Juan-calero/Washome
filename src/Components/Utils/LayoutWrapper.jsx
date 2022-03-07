import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import { SizeXL } from "./tokens"

export const LayoutWrapper = ({ children, width }) => (
  <StyledLayout $width={width}>{children}</StyledLayout>
)

const StyledLayout = styled.div`
  width: min(100%, ${SizeXL});
  ${({ $width }) =>
    $width &&
    css`
      width: min(100%, ${$width});
    `}
  margin: auto;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
