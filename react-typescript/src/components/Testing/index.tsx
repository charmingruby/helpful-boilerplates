import styled from 'styled-components';

import { Container, Content } from './styles';

export function Testing() {
  const l = 4;
  return (
    <Container>
      <Content>
        <a href='https://github.com/charmingruby/frontend-boilerplate'>
          <h1>
            FrontEnd - <span>Boilerplate</span>
          </h1>
        </a>
      </Content>
    </Container>
  );
}
