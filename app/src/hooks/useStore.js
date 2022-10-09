import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "60px",
        "justifyContent": "center",
        "alignItems": "center",
        "rowGap": "",
        "columnGap": ""
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "20px",
        "paddingLeft": "20px",
        "paddingRight": "20px",
        "paddingBottom": "10px",
        "marginLeft": "80px",
        "marginTop": "10px",
        "marginRight": "40px",
        "width": "",
        "cursor": "pointer",
        "marginBottom": "10px",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "fontSize": "20px",
        "textAlign": "left"
      },
      "custom": {
        "text": "WebFolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://portfoliotemplates.webflow.io/",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "0px",
        "paddingBottom": "",
        "marginTop": "30px",
        "paddingLeft": "0px",
        "paddingRight": "0px",
        "marginLeft": "120px",
        "cursor": "pointer",
        "marginRight": "10px",
        "marginBottom": "15px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://portfoliotemplates.webflow.io/abouts/about-v1",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "0px",
        "marginTop": "30px",
        "paddingRight": "0px",
        "paddingLeft": "0px",
        "cursor": "pointer",
        "marginRight": "10px",
        "marginLeft": "10px",
        "paddingBottom": "0px",
        "marginBottom": "15px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://portfoliotemplates.webflow.io/portfolio",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "30px",
        "paddingTop": "0px",
        "paddingLeft": "0px",
        "paddingRight": "",
        "marginRight": "10px",
        "marginLeft": "10px",
        "marginBottom": "15px",
        "cursor": "pointer",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://portfoliotemplates.webflow.io/contact",
              "target": "_self"
            }
          }
        ]
      }
    },
    "Dropdown1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "30px",
        "paddingTop": "",
        "paddingLeft": "",
        "paddingRight": "",
        "borderRightStyle": "none",
        "borderStyle": "none",
        "marginLeft": "15px",
        "marginRight": "10px",
        "cursor": "pointer",
        "marginBottom": "15px",
        "fontFamily": "IBM Plex Sans",
        "wordWrap": "normal",
        "fontWeight": "normal"
      },
      "custom": {
        "values": [
          "Pages"
        ],
        "selectedValue": ""
      },
      "callbacks": {}
    },
    "Image1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "",
        "paddingTop": "",
        "paddingRight": "",
        "paddingBottom": "",
        "height": "25px",
        "width": "25px",
        "marginTop": "25px",
        "marginLeft": "20px",
        "cursor": "pointer",
        "marginBottom": "15px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/bag.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "alignItems": "stretch",
        "justifyContent": "center",
        "flexDirection": "column",
        "backgroundColor": "#060000",
        "flexWrap": "wrap",
        "textAlign": "center"
      },
      "callbacks": {}
    },
    "TextBox9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "color": "#F0FFFF",
        "lineHeight": "",
        "fontFamily": "IBM Plex Sans",
        "fontWeight": "normal",
        "textAlign": "center",
        "marginLeft": "150px",
        "fontSize": "40px",
        "paddingBottom": "",
        "marginBottom": "15px",
        "cursor": "text"
      },
      "custom": {
        "text": "Webfolio X Webflow "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "color": "#F0FFFF",
        "textAlign": "center",
        "marginLeft": "150px",
        "outlineOffset": "",
        "fontSize": "40px",
        "marginBottom": "15px",
        "paddingBottom": "10px",
        "marginTop": "15px",
        "cursor": "text",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Template and UI Kit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#F0FFFF",
        "textAlign": "left",
        "wordWrap": "normal",
        "alignSelf": "flex-start",
        "marginLeft": "150px",
        "fontSize": "",
        "paddingBottom": "15px",
        "cursor": "text",
        "marginTop": "25px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Presenting Webfolio X, our ultimate multi-purpose portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#F0FFFF",
        "textAlign": "left",
        "alignSelf": "flex-start",
        "marginLeft": "150px",
        "lineHeight": "",
        "float": "none",
        "clear": "none",
        "cursor": "text",
        "fontSize": "15px",
        "paddingBottom": "10px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Webflow Template & UI Kit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "height": "800px"
      },
      "callbacks": {}
    },
    "Div2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "flex-start",
        "width": "100%",
        "height": "2000px",
        "boxSizing": "content-box",
        "borderColor": "#000000"
      },
      "callbacks": {}
    },
    "Div4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "block",
        "visibility": "initial"
      },
      "callbacks": {}
    },
    "TextBox18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#ffffff",
        "boxSizing": "content-box",
        "overflow": "visible",
        "alignSelf": "baseline",
        "float": "left",
        "marginLeft": "80px",
        "marginTop": "50px",
        "cursor": "pointer",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Browse Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "static",
        "float": "left",
        "clear": "none",
        "color": "#ffffff",
        "alignSelf": "baseline",
        "marginLeft": "150px",
        "marginTop": "50px",
        "cursor": "pointer",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Get template"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://webflow.com/templates/html/portfolio-x-portfolio-website-template",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Div5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "120px",
        "alignSelf": "auto",
        "marginBottom": "30px",
        "textAlign": "center",
        "float": "none"
      },
      "callbacks": {}
    },
    "TextBox20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "auto",
        "position": "static",
        "textAlign": "justify",
        "fontSize": "40px",
        "top": null,
        "marginTop": "80px",
        "float": "none",
        "marginRight": "180px",
        "marginLeft": "100px",
        "right": null,
        "paddingBottom": "20px",
        "width": "80%",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "What's included"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "textAlign": "right",
        "fontSize": "12px",
        "marginRight": "15px",
        "boxSizing": "content-box",
        "alignSelf": "center",
        "position": "relative",
        "right": 50,
        "width": "80%",
        "paddingTop": "10px",
        "marginLeft": "150px",
        "float": "left",
        "top": 10,
        "clear": "none",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Webfolio X Webflow Template & UI Kit includes over 24+ pages in total, with more than 40 sections, and 3 different Homepages, Blogs, and About pages."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "300px",
        "height": "150px",
        "alignSelf": "auto",
        "textAlign": "center",
        "float": "left",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#000000",
        "position": "relative",
        "left": 125,
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "paddingTop": "40px",
        "marginTop": "",
        "boxSizing": "border-box",
        "fontSize": "40px",
        "lineHeight": "",
        "cursor": "text",
        "bottom": 10,
        "marginLeft": "50px",
        "marginRight": "",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "24+ Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "float": "right",
        "position": "relative",
        "right": 125,
        "width": "300px",
        "height": "150px",
        "alignSelf": "auto",
        "textAlign": "center",
        "paddingTop": "25px",
        "boxSizing": "border-box",
        "borderWidth": "1px",
        "borderColor": "#000000",
        "borderStyle": "solid",
        "fontSize": "40px",
        "top": null,
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "cursor": "text",
        "backgroundOrigin": "padding-box",
        "clear": "right",
        "bottom": 10,
        "marginRight": "50px",
        "marginTop": "10px",
        "flexGrow": 2,
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Figma File Included"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingTop": "40px",
        "width": "300px",
        "height": "150px",
        "boxSizing": "border-box",
        "position": "relative",
        "left": 125,
        "top": 400,
        "bottom": 10,
        "fontSize": "35px",
        "marginBottom": "10px",
        "float": "left",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#000000",
        "cursor": "text",
        "paddingLeft": "",
        "textAlign": "center",
        "marginLeft": "50px",
        "marginRight": "",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "25+ Components & Syles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "cursor": "text",
        "width": "300px",
        "height": "150px",
        "float": "right",
        "position": "relative",
        "right": 125,
        "paddingTop": "40px",
        "marginBottom": "20px",
        "boxSizing": "border-box",
        "outlineOffset": "",
        "fontSize": "40px",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "marginTop": "",
        "alignSelf": "auto",
        "bottom": 10,
        "clear": "right",
        "textAlign": "center",
        "marginRight": "50px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "40+ Sections"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "TextBox4": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex3": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox10": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox22": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox25": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "767": {
      "TextBox4": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex3": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox10": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox22": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox25": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "991": {
      "TextBox1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "fontFamily": ""
        }
      },
      "TextBox4": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Image1": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "Flex3": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px ",
          "fontFamily": ""
        }
      },
      "TextBox10": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      },
      "TextBox25": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
