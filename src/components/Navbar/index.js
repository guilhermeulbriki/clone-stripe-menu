import React from 'react';

import { Products, Developers, Company } from '../Content';
import { Container, DropdownStyles } from './styles';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              />
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
              <DropdownOption
                name="Empresa"
                content={Company}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
