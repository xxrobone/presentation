import React from 'react';
import Topbar from './Topbar';
import Nav from './Nav';
import NavItem from './NavItem';
import DropDown from './Dropdown';
import DropDownItem from './DropdownItem';

// styles
import styles from './Header.module.scss';

import { AiOutlineHome } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiMusicbrainz, SiHandshake } from 'react-icons/si';
import {
  MdOutlineHistoryEdu,
  MdOutlineAnnouncement,
  MdOutlineGroups,
} from 'react-icons/md';
import { GiPeaceDove, GiFist, GiPlantRoots } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';
import { FiMusic } from 'react-icons/fi';
import { FaRecordVinyl } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Topbar />
      <Nav>
        <NavItem title='Home' icon={<AiOutlineHome />} url='/' />
        <NavItem
          title='About me'
          icon={<MdOutlineAnnouncement />}
          url='/om-oss'
        />
        <NavItem title='Internship' icon={<MdOutlineHistoryEdu />} url=''>
          <DropDown>
            <DropDownItem
              title='Summary'
              icon={<SiMusicbrainz />}
              url='/internship/summary'
            />
            <DropDownItem
              title='Daily Overview'
              icon={<GiPeaceDove />}
              url='/internship/daily-overview'
            />
            <DropDownItem
              title='Team'
              icon={<MdOutlineGroups />}
              url='/internship/team'
            />
            <DropDownItem
              title='Tech'
              icon={<MdOutlineGroups />}
              url='/internship/tech'
            />
            <DropDownItem
              title='Tools'
              icon={<MdOutlineGroups />}
              url='/internship/tools'
            />
            <DropDownItem
              title='Features'
              icon={<MdOutlineGroups />}
              url='/internship/features'
            />
            <DropDownItem
              title='reflection'
              icon={<MdOutlineGroups />}
              url='/internship/reflection'
            />
          </DropDown>
        </NavItem>
        <NavItem title='Project' icon={<RiArticleLine />} url='/project' />
      </Nav>
    </div>
  );
};

export default Header;
