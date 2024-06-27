import '../assets/css/Sidebar.css';
import {Button, Layout, Menu, theme} from 'antd';
// import { MdHomeFilled } from 'react-icons/md';
import {HomeOutlined, UnorderedListOutlined, SettingOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { MdOutlineGroups } from "react-icons/md";
import { FaTruckPlane } from "react-icons/fa6";
import ToggleThemeButton from './ToggleThemeButton';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

const {Header, Sider} = Layout;
const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const { token: {colorBgContainer}, } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
          <div className="logo">
            <div className="logo-icon">
              <Link to='/administracion'><img src="/img/Icono.png" alt='' /></Link>
            </div>
          </div>
          <Menu theme={darkTheme ? 'dark' : 'light'} /*mode='inline'*/ className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to='/administracion' className='Link'>Menú</Link>
            </Menu.Item>
            <Menu.SubMenu key="modules" icon={<UnorderedListOutlined />} title="Módulos">
              <Menu.SubMenu key="submain" title="Inicio">
                <Menu.Item key="main-1">
                  <Link to='/administracion' className='Link'>Presentación</Link>
                </Menu.Item>
                <Menu.Item key="main-2">
                  <Link to='/administracion' className='Link'>Bienvenido</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="subPM" title="Pueblos Mágicos">
                <Menu.Item key="PM-1">
                  <Link to='/administracion' className='Link'>Presentación</Link>
                </Menu.Item>
                <Menu.Item key="PM-2">
                  <Link to='/administracion' className='Link'>Categorías PM</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="subEI" title="Eventos Internacionales">
                <Menu.Item key="EI-1">
                  <Link to='/administracion' className='Link'>Presentación</Link>
                </Menu.Item>
                <Menu.Item key="EI-2">
                  <Link to='/administracion' className='Link'>Categorías EI</Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="subE" title="Ecoturismo">
                <Menu.Item key="E-1">
                  <Link to='/administracion' className='Link'>Presentación</Link>
                </Menu.Item>
                <Menu.Item key="E-2">
                  <Link to='/administracion' className='Link'>Categorías E</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="employees" icon={<MdOutlineGroups />}>
              <Link to='/administracion' className='Link'>Empleados</Link>
            </Menu.Item>
            <Menu.Item key="trips" icon={<FaTruckPlane />}>
              <Link to='/administracion' className='Link'>Viajes Ordenados</Link>
            </Menu.Item>
            <Menu.Item key="conf" icon={<SettingOutlined />}>
              <Link to='/administracion' className='Link'>Configuración</Link>
            </Menu.Item>
          </Menu>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer}}>
            <Button type='text' className='toggle' onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default Sidebar