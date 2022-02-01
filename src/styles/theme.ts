import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "200": "#999999",
      "300": "#47585B",
    },
    orange: "#FFBA08"
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
      }
    }
  },
  components: {
    Divider: {
      baseStyle: {
        color: "#47585B",
        bg: "#47585B",
        opacity: 1,
      }
    }
  }
})