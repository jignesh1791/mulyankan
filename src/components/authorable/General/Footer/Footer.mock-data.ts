import { FooterProps } from './Footer';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: FooterProps = {
  fields: {
    FooterNavigationLink: [
      {
        id: '04f78bcd-ace7-47e6-8257-8e2b4a839ea7',
        url: '/Data/Navigations/Footer/News',
        name: 'News',
        displayName: 'News',
        fields: {
          LinkField: {
            value: {
              text: '',
              anchor: 'News',
              linktype: 'internal',
              class: '',
              title: 'News',
              target: '',
              querystring: '',
              id: '{EB84166A-9CA0-4B2B-BE62-880D9AFCE053}',
              href: '/News',
            },
          },
        },
      },
      {
        id: '1d1ab0bf-1eae-48b1-bf78-d39c23398625',
        url: '/Data/Navigations/Footer/Teams',
        name: 'Teams',
        displayName: 'Teams',
        fields: {
          LinkField: {
            value: {
              text: '',
              anchor: 'Teams',
              linktype: 'internal',
              class: '',
              title: 'Teams',
              target: '',
              querystring: '',
              id: '{D913D8DE-8A04-4C61-A442-4012D86AF8EC}',
              href: '/Teams',
            },
          },
        },
      },
      {
        id: 'b3594630-d85c-4f38-b0aa-07a3fbba6c95',
        url: '/Data/Navigations/Footer/Player',
        name: 'Player',
        displayName: 'Player',
        fields: {
          LinkField: {
            value: {
              text: '',
              anchor: 'Player',
              linktype: 'internal',
              class: '',
              title: 'Player',
              target: '',
              querystring: '',
              id: '{22091B41-5DC6-4EE0-8716-33B2EE6F317F}',
              href: '/Players',
            },
          },
        },
      },
    ],
    CopyrightText: {
      value: 'ⓒ 2023 reserved Copyright by Chakravyuh',
    },
    FooterLogo: {
      value: {
        src: '/-/media/Project/Mulyankan/jss-starter-jss/Header/Horizontal_Digital_Black_CMYK.png?h=360&iar=0&w=432&hash=C8CC9578CC1E33B842DB53492872074F',
        alt: 'Horizontal',
        width: '432',
        height: '360',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
