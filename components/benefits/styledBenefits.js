import styled from "styled-components";

export const StyledAllBenefits = styled.div`
  max-width: ${({ theme }) => theme.maxWidth || "1200px"};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 60px;
`;

export const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 1;
  text-align: center;

  img {
    margin-bottom: 15px;
  }

  .head {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    text-transform: uppercase;
    color: #333;
  }

  .tail {
    font-size: 14px;
    color: #666;
  }

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      border-right: none;
    }
  }
`;
