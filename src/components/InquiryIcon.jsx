import { styled } from "styled-components";

export const InquiryIcon = ({ scroll, path }) => {
  return (
    <Wrapper scroll={scroll} path={path} title="문의하기">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24">
        <path
          fill={scroll < 20 && path === "/" ? "white" : "black"}
          d="M20.498 15.5H3.5v5h16.998zm1.447-1.028l.021.062l.023.1l.01.1v6.516a.75.75 0 0 1-.65.743l-.1.007H2.75a.75.75 0 0 1-.743-.648L2 21.25v-6.5l.002-.052l.01-.086a1 1 0 0 1 .047-.153l2.76-6.019a.75.75 0 0 1 .573-.43l.108-.007l2.54-.001l-.79 1.37l-.067.13H5.98L3.918 14H20.07l-2.027-4.346l.862-1.497q.101.076.172.184l.053.095zm-8.58-12.416l.092.045l5.188 3.003c.328.19.458.591.319.933l-.045.092L16.112 11h1.138a.75.75 0 0 1 .102 1.494l-.102.007l-2.002-.001v.003h-4.079l-.003-.003H6.75a.75.75 0 0 1-.102-1.492l.102-.007L8.573 11l-.182-.105a.75.75 0 0 1-.318-.933l.044-.092l4.317-7.496c.19-.329.59-.46.931-.32m-.01 1.72L9.789 9.97L11.567 11h2.817l2.865-4.973z"></path>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 40px;
  > svg {
    > path {
      transition: 0.4s linear;
    }
  }
`;
