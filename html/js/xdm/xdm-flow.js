window.__XDM_ACCEL_FLOW__ = {
  "contentHash": "b9ba6163f1a37b67d3e9e8a036ef82b8b815834b1a17d3f80fb039c2a7b15419",
  "edgeDomain": "edge.adobedc.net",
  "flow": {
    "config": {
      "consent": {},
      "globalsStatic": {
        "modelVersion": "1.0.0"
      },
      "sources": {
        "src_web": {
          "package": "@elbwalker/walker.js"
        }
      },
      "destinations": {
        "aep-edge": {
          "package": "destination-aep-edge",
          "settings": {
            "datastreamId": "1d8c001a-e1bb-45e7-a077-355d90d256ba"
          }
        }
      }
    },
    "sourceMapping": {
      "src_web": {
        "package": "@elbwalker/walker.js",
        "data": [
          "page_url",
          "page_name",
          "site_section",
          "cart_total",
          "order_id",
          "currency",
          "email",
          "product_sku",
          "gift_message",
          "search_term",
          "campaign_name",
          "campaign_category",
          "campaign_label",
          "campaign_placement",
          "campaign_component",
          "campaign_region_path",
          "sku",
          "product_name",
          "price",
          "category",
          "width_cm",
          "height_cm",
          "depth_cm",
          "internal_score"
        ]
      }
    },
    "mapping": {
      "page": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "commerce": {
                "map": {
                  "order": {
                    "map": {
                      "priceTotal": {
                        "key": "data.cart_total"
                      },
                      "purchaseID": {
                        "key": "data.order_id"
                      },
                      "currencyCode": {
                        "key": "data.currency"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "order": {
                    "map": {
                      "customerEmail": {
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "productSku": {
                        "key": "data.product_sku"
                      },
                      "giftMessage": {
                        "key": "data.gift_message"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "order": {
        "complete": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "commerce": {
                "map": {
                  "order": {
                    "map": {
                      "priceTotal": {
                        "key": "data.cart_total"
                      },
                      "purchaseID": {
                        "key": "data.order_id"
                      },
                      "currencyCode": {
                        "key": "data.currency"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "order": {
                    "map": {
                      "customerEmail": {
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "productSku": {
                        "key": "data.product_sku"
                      },
                      "giftMessage": {
                        "key": "data.gift_message"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "search": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "commerce": {
                "map": {
                  "order": {
                    "map": {
                      "priceTotal": {
                        "key": "data.cart_total"
                      },
                      "purchaseID": {
                        "key": "data.order_id"
                      },
                      "currencyCode": {
                        "key": "data.currency"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "order": {
                    "map": {
                      "customerEmail": {
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "productSku": {
                        "key": "data.product_sku"
                      },
                      "giftMessage": {
                        "key": "data.gift_message"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "product": {
        "view": {
          "data": {
            "map": {
              "_aeppsemea": {
                "map": {
                  "product": {
                    "map": {
                      "sku": {
                        "key": "data.sku"
                      },
                      "name": {
                        "key": "data.product_name"
                      },
                      "price": {
                        "key": "data.price"
                      },
                      "category": {
                        "key": "data.category"
                      },
                      "dimensions": {
                        "map": {
                          "width": {
                            "key": "data.width_cm"
                          },
                          "height": {
                            "key": "data.height_cm"
                          },
                          "depth": {
                            "key": "data.depth_cm"
                          }
                        }
                      },
                      "internalScore": {
                        "key": "data.internal_score"
                      }
                    }
                  }
                }
              }
            }
          },
          "identity": {
            "productSKU": [
              {
                "id": {
                  "key": "data.sku"
                },
                "primary": true
              }
            ]
          }
        },
        "add": {
          "data": {
            "map": {
              "_aeppsemea": {
                "map": {
                  "product": {
                    "map": {
                      "sku": {
                        "key": "data.sku"
                      },
                      "name": {
                        "key": "data.product_name"
                      },
                      "price": {
                        "key": "data.price"
                      },
                      "category": {
                        "key": "data.category"
                      },
                      "dimensions": {
                        "map": {
                          "width": {
                            "key": "data.width_cm"
                          },
                          "height": {
                            "key": "data.height_cm"
                          },
                          "depth": {
                            "key": "data.depth_cm"
                          }
                        }
                      },
                      "internalScore": {
                        "key": "data.internal_score"
                      }
                    }
                  }
                }
              }
            }
          },
          "identity": {
            "productSKU": [
              {
                "id": {
                  "key": "data.sku"
                },
                "primary": true
              }
            ]
          }
        }
      }
    }
  },
  "ajvBundle": {
    "schemas": {
      "tgt_storefront_event": {
        "title": "retail.web.storefront-event",
        "type": "object",
        "description": "Storefront Experience Event — composed by xdm-accelerator from catalog retail.web@1.0.0.",
        "properties": {
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "type": "string",
                    "description": "Email address."
                  },
                  "productSku": {
                    "title": "productSku",
                    "type": "string",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers."
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "type": "string",
                    "description": "The name of the item."
                  },
                  "category": {
                    "title": "category",
                    "type": "string",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy."
                  },
                  "label": {
                    "title": "label",
                    "type": "string",
                    "description": "An alias for the item."
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference",
            "description": "A unique identifier for the time-series event."
          },
          "commerce": {
            "title": "Commerce",
            "description": "Product returns, warranty registration, and shopping cart/order process.",
            "type": "object",
            "properties": {
              "billing": {
                "description": "Billing details for one or more payments.",
                "type": "object",
                "properties": {
                  "address": {
                    "title": "Billing Address",
                    "description": "Billing Address.",
                    "type": "object",
                    "properties": {
                      "_id": {
                        "title": "Coordinates ID",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The unique identifier of the coordinates."
                      },
                      "_repo": {
                        "properties": {
                          "createDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is \"2004-10-23T12:00:00-06:00\"."
                          },
                          "discardDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was discarded (for example, moved to a recycle bin or trash) in the repository. The date time property should conform to ISO 8601 standard."
                          },
                          "expires": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource is scheduled to expire. The date time property should conform to ISO 8601 standard."
                          },
                          "lastPublishedTime": {
                            "type": "string",
                            "description": "The timestamp at which the resource was most recently published, as reported by the publish subsystem."
                          },
                          "modifyDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is \"2004-10-23T12:00:00-06:00\"."
                          }
                        },
                        "type": "object"
                      },
                      "_schema": {
                        "properties": {
                          "description": {
                            "title": "Description",
                            "type": "string",
                            "description": "A description of what the coordinates identify."
                          },
                          "elevation": {
                            "title": "Elevation",
                            "type": "number",
                            "description": "The specific elevation of the defined coordinate. The value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters."
                          },
                          "latitude": {
                            "title": "Latitude",
                            "type": "number",
                            "description": "The signed vertical coordinate of a geographic point."
                          },
                          "longitude": {
                            "title": "Longitude",
                            "type": "number",
                            "description": "The signed horizontal coordinate of a geographic point."
                          }
                        },
                        "type": "object"
                      },
                      "city": {
                        "title": "City",
                        "type": "string",
                        "description": "The name of the city."
                      },
                      "country": {
                        "title": "Country",
                        "type": "string",
                        "description": "The name of the government-administered territory. Other than `xdm:countryCode`, this is a free-form field that can have the country name in any language."
                      },
                      "countryCode": {
                        "title": "Country code",
                        "type": "string",
                        "pattern": "^[A-Z]{2}$",
                        "description": "The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country."
                      },
                      "createdByBatchID": {
                        "title": "Created by batch identifier",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The dataset files in Catalog which has been originating the creation of the record."
                      },
                      "dmaID": {
                        "title": "Designated market area",
                        "type": "integer",
                        "description": "The Nielsen media research designated market area."
                      },
                      "label": {
                        "title": "Label",
                        "type": "string",
                        "description": "Free form name of the address."
                      },
                      "lastVerifiedDate": {
                        "title": "Last verified date",
                        "type": "string",
                        "format": "date",
                        "description": "The date that the address was last verified as still associated to the person."
                      },
                      "modifiedByBatchID": {
                        "title": "Modified by batch identifier",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`."
                      },
                      "msaID": {
                        "title": "Metropolitan statistical area",
                        "type": "integer",
                        "description": "The metropolitan statistical area in the United States where the observation occurred."
                      },
                      "postOfficeBox": {
                        "title": "Post office box",
                        "type": "string",
                        "description": "Post office box of the address."
                      },
                      "postalCode": {
                        "title": "Postal code",
                        "type": "string",
                        "description": "The postal code of the location. Postal codes are not available for all countries. In some countries, this will only contain part of the postal code."
                      },
                      "primary": {
                        "title": "Primary",
                        "type": "boolean",
                        "description": "Primary address indicator. A profile can have only one `primary` address at a given point of time."
                      },
                      "region": {
                        "title": "Region",
                        "type": "string",
                        "description": "The region, county, or district portion of the address."
                      },
                      "repositoryCreatedBy": {
                        "title": "Created by user identifier",
                        "type": "string",
                        "description": "User ID of who created the record."
                      },
                      "repositoryLastModifiedBy": {
                        "title": "Modified by user identifier",
                        "type": "string",
                        "description": "User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`."
                      },
                      "state": {
                        "title": "State",
                        "type": "string",
                        "description": "The name of the State. This is a free-form field."
                      },
                      "stateProvince": {
                        "title": "State or province",
                        "type": "string",
                        "description": "The state, or province portion of the observation. The format follows the [ISO 3166-2 (country and subdivision)][http://www.unece.org/cefact/locode/subdivisions.html] standard.",
                        "pattern": "([A-Z]{2}-[A-Z0-9]{1,3}|)"
                      },
                      "status": {
                        "title": "Status",
                        "type": "string",
                        "description": "An indication as to the ability to use the address."
                      },
                      "statusReason": {
                        "title": "Status reason",
                        "type": "string",
                        "description": "A description of the current status."
                      },
                      "street1": {
                        "title": "Street 1",
                        "type": "string",
                        "description": "Primary street level information, apartment number, street number, and street name."
                      },
                      "street2": {
                        "title": "Street 2",
                        "type": "string",
                        "description": "Optional street information second line."
                      },
                      "street3": {
                        "title": "Street 3",
                        "type": "string",
                        "description": "Optional street information third line."
                      },
                      "street4": {
                        "title": "Street 4",
                        "type": "string",
                        "description": "Optional street information fourth line."
                      }
                    }
                  }
                }
              },
              "cart": {
                "description": "The properties of the cart that contains one or more products.",
                "type": "object",
                "properties": {
                  "cartID": {
                    "title": "Cart ID",
                    "type": "string",
                    "description": "Unique identifier assigned by the seller for the cart."
                  },
                  "cartSource": {
                    "title": "Cart Source",
                    "type": "string",
                    "description": "Where one or more products was added to the cart from."
                  }
                }
              },
              "cartAbandons": {
                "title": "Cart Abandons",
                "description": "A product list has been identified as no longer accessible or purchasable by the user.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "checkouts": {
                "title": "Checkouts",
                "description": "An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "commerceScope": {
                "title": "Scope",
                "description": "Commerce scope identifiers of where an event occurred (store view, store, website etc.).",
                "type": "object",
                "properties": {
                  "environmentID": {
                    "title": "Environment ID",
                    "type": "string",
                    "description": "The environment ID. A 32-digit alphanumeric ID separated by hyphens."
                  },
                  "storeCode": {
                    "title": "Store Code",
                    "type": "string",
                    "description": "The unique store code. Many stores may exist per website."
                  },
                  "storeViewCode": {
                    "title": "Store View Code",
                    "type": "string",
                    "description": "The unique store view code. Many store views may exist per store."
                  },
                  "websiteCode": {
                    "title": "Website Code",
                    "type": "string",
                    "description": "The unique website code. Many websites may exist in an environment."
                  }
                }
              },
              "inStorePurchase": {
                "title": "In Store Purchase",
                "description": "'inStore' purchase is saved for analytics use.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "instantPurchase": {
                "description": "A product has been purchased instantly, potentially skipping the cart or checkout.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "order": {
                "title": "Order",
                "description": "The placed order for one or more products.",
                "type": "object",
                "properties": {
                  "cancelDate": {
                    "title": "Cancel Date",
                    "type": "string",
                    "format": "date-time",
                    "description": "The date/time when an order cancellation is initiated by the shopper."
                  },
                  "createdDate": {
                    "title": "Created Date",
                    "type": "string",
                    "format": "date-time",
                    "description": "The time/date when a new order is created in the commerce system."
                  },
                  "currencyCode": {
                    "title": "Currency",
                    "type": "string",
                    "pattern": "^[A-Z]{3}$",
                    "description": "The ISO 4217 currency code used for the order totals."
                  },
                  "discountAmount": {
                    "title": "Discount Amount",
                    "type": "number",
                    "description": "The difference between the regular price and the special price - applied to the entire order, rather than to individual products."
                  },
                  "lastUpdatedDate": {
                    "title": "Last Updated Date",
                    "type": "string",
                    "format": "date-time",
                    "description": "The time when a particular order record is last updated in the commerce system."
                  },
                  "orderType": {
                    "title": "Order Type",
                    "type": "string",
                    "description": "The type order that has been placed.",
                    "enum": [
                      "checkout",
                      "instant_purchase"
                    ]
                  },
                  "payments": {
                    "title": "Payment List",
                    "type": "array",
                    "description": "The list of payments for this order.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "currencyCode": {
                          "title": "Currency Code",
                          "type": "string",
                          "pattern": "^[A-Z]{3}$",
                          "description": "The ISO 4217 currency code used for this payment item."
                        },
                        "paymentAmount": {
                          "title": "Payment Amount",
                          "type": "number",
                          "description": "The value of the payment."
                        },
                        "paymentType": {
                          "title": "Payment Type",
                          "type": "string",
                          "description": "The method of payment for this order. Enumerated, custom values allowed."
                        },
                        "transactionID": {
                          "title": "Transaction ID",
                          "type": "string",
                          "description": "The unique transaction identifier for this payment item."
                        }
                      }
                    }
                  },
                  "priceTotal": {
                    "title": "Price Total",
                    "type": "number",
                    "description": "The total price of this order after all discounts and taxes have been applied."
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "type": "string",
                    "description": "Unique identifier assigned by the seller for this purchase or contract. There is no guarantee that the ID is unique."
                  },
                  "purchaseOrderNumber": {
                    "title": "Purchase Order Number",
                    "type": "string",
                    "description": "Unique identifier assigned by the purchaser for this purchase or contract."
                  },
                  "refundTotal": {
                    "title": "Total Amount Refunded",
                    "type": "number",
                    "description": "The total amount provided in this refund on the order, combining all refunded items and after any discounts etc. have been applied."
                  },
                  "refunds": {
                    "title": "Refunds List",
                    "type": "array",
                    "description": "The list of refunds for this order.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "currencyCode": {
                          "title": "Currency Code",
                          "type": "string",
                          "pattern": "^[A-Z]{3}$",
                          "description": "The ISO 4217 currency code used for this refund item."
                        },
                        "refundAmount": {
                          "title": "Refund Amount",
                          "type": "number",
                          "description": "The value of the refund."
                        },
                        "refundPaymentType": {
                          "title": "Refund Payment Type",
                          "type": "string",
                          "description": "The method of payment for this order. Enumerated, custom values allowed.",
                          "enum": [
                            "cash",
                            "credit_card",
                            "debit_card",
                            "gift_card",
                            "check",
                            "paypal",
                            "wire_transfer",
                            "credit_card_reference",
                            "other"
                          ]
                        },
                        "refundReason": {
                          "title": "Refund Reason",
                          "type": "string",
                          "description": "Reason why a refund was issued. Enumerated.",
                          "enum": [
                            "return",
                            "price_adjustment"
                          ]
                        },
                        "transactionID": {
                          "title": "Transaction ID",
                          "type": "string",
                          "description": "The unique transaction identifier for this refund item."
                        }
                      }
                    }
                  },
                  "returns": {
                    "title": "Return Info",
                    "description": "The RMA (Return Merchandise Authorization) issued.",
                    "type": "object",
                    "properties": {
                      "purchaseID": {
                        "title": "Order Purchase ID",
                        "type": "string",
                        "description": "The unique identifier of the order/purchase that the RMA pertains to."
                      },
                      "returnID": {
                        "title": "Return ID",
                        "type": "string",
                        "description": "The unique identifier for this RMA."
                      },
                      "returnStatus": {
                        "title": "Return Status",
                        "type": "string",
                        "description": "The current status of the RMA (e.g. Pending, Closed)."
                      }
                    }
                  },
                  "taxAmount": {
                    "title": "Tax Amount",
                    "type": "number",
                    "description": "The tax amount paid by the buyer as part of the final payment."
                  }
                }
              },
              "productListAdds": {
                "title": "Product List (Cart) Adds",
                "description": "Addition of a product to the product list, for example a product is added to a shopping cart.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "productListOpens": {
                "title": "Product List (Cart) Opens",
                "description": "Initializations of a new product list, for example a shopping cart is created.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "productListRemovals": {
                "title": "Product List (Cart) Removals",
                "description": "Removal or removals of a product entry from a product list, for example a product is removed from a shopping cart.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "productListReopens": {
                "title": "Product List (Cart) Reopens",
                "description": "A product list that was no longer accessible (abandoned) has been re-activated by the user. Example via a re-marketing activity.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "productListViews": {
                "title": "Product List (Cart) Views",
                "description": "View or views of a product-list has occurred.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "productViews": {
                "title": "Product Views",
                "description": "View or views of a product have occurred.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "promotionID": {
                "title": "Promotion ID",
                "type": "string",
                "description": "Promotion identifier if any for the order placed."
              },
              "purchases": {
                "title": "Purchases",
                "description": "An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "requisitionList": {
                "title": "Requisition List",
                "description": "The properties of requisition list created by customer.",
                "type": "object",
                "properties": {
                  "ID": {
                    "title": "Requisition List ID",
                    "type": "string",
                    "description": "Unique identifier of the requisition list."
                  },
                  "description": {
                    "title": "Requisition List Description",
                    "type": "string",
                    "description": "Description of the requisition list specified by the customer."
                  },
                  "name": {
                    "title": "Requisition List Name",
                    "type": "string",
                    "description": "Name of the requisition list specified by the customer."
                  }
                }
              },
              "requisitionListAdds": {
                "title": "Requisition List Adds",
                "description": "Addition of a product(s) to a requisition list.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "requisitionListDeletes": {
                "title": "Requisition List Deletes",
                "description": "Removal of requisition list.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "requisitionListOpens": {
                "title": "Requisition List Opens",
                "description": "Initializations of a new Requisition List.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "requisitionListRemovals": {
                "title": "Requisition List Removals",
                "description": "Removal of a product(s) from a requisition product list.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "saveForLaters": {
                "title": "Save For Laters",
                "description": "Product list is saved for future use, for example a product wish list.",
                "type": "object",
                "properties": {
                  "id": {
                    "title": "Unique Identifier",
                    "type": "string",
                    "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                  },
                  "value": {
                    "type": "number",
                    "description": "The quantifiable value of this measure."
                  }
                },
                "required": [
                  "value"
                ]
              },
              "shipping": {
                "description": "Shipping details for one or more products.",
                "type": "object",
                "properties": {
                  "address": {
                    "title": "Shipping Address",
                    "description": "Shipping Address.",
                    "type": "object",
                    "properties": {
                      "_id": {
                        "title": "Coordinates ID",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The unique identifier of the coordinates."
                      },
                      "_repo": {
                        "properties": {
                          "createDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is \"2004-10-23T12:00:00-06:00\"."
                          },
                          "discardDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was discarded (for example, moved to a recycle bin or trash) in the repository. The date time property should conform to ISO 8601 standard."
                          },
                          "expires": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource is scheduled to expire. The date time property should conform to ISO 8601 standard."
                          },
                          "lastPublishedTime": {
                            "type": "string",
                            "description": "The timestamp at which the resource was most recently published, as reported by the publish subsystem."
                          },
                          "modifyDate": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is \"2004-10-23T12:00:00-06:00\"."
                          }
                        },
                        "type": "object"
                      },
                      "_schema": {
                        "properties": {
                          "description": {
                            "title": "Description",
                            "type": "string",
                            "description": "A description of what the coordinates identify."
                          },
                          "elevation": {
                            "title": "Elevation",
                            "type": "number",
                            "description": "The specific elevation of the defined coordinate. The value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters."
                          },
                          "latitude": {
                            "title": "Latitude",
                            "type": "number",
                            "description": "The signed vertical coordinate of a geographic point."
                          },
                          "longitude": {
                            "title": "Longitude",
                            "type": "number",
                            "description": "The signed horizontal coordinate of a geographic point."
                          }
                        },
                        "type": "object"
                      },
                      "city": {
                        "title": "City",
                        "type": "string",
                        "description": "The name of the city."
                      },
                      "country": {
                        "title": "Country",
                        "type": "string",
                        "description": "The name of the government-administered territory. Other than `xdm:countryCode`, this is a free-form field that can have the country name in any language."
                      },
                      "countryCode": {
                        "title": "Country code",
                        "type": "string",
                        "pattern": "^[A-Z]{2}$",
                        "description": "The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country."
                      },
                      "createdByBatchID": {
                        "title": "Created by batch identifier",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The dataset files in Catalog which has been originating the creation of the record."
                      },
                      "dmaID": {
                        "title": "Designated market area",
                        "type": "integer",
                        "description": "The Nielsen media research designated market area."
                      },
                      "label": {
                        "title": "Label",
                        "type": "string",
                        "description": "Free form name of the address."
                      },
                      "lastVerifiedDate": {
                        "title": "Last verified date",
                        "type": "string",
                        "format": "date",
                        "description": "The date that the address was last verified as still associated to the person."
                      },
                      "modifiedByBatchID": {
                        "title": "Modified by batch identifier",
                        "type": "string",
                        "format": "uri-reference",
                        "description": "The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`."
                      },
                      "msaID": {
                        "title": "Metropolitan statistical area",
                        "type": "integer",
                        "description": "The metropolitan statistical area in the United States where the observation occurred."
                      },
                      "postOfficeBox": {
                        "title": "Post office box",
                        "type": "string",
                        "description": "Post office box of the address."
                      },
                      "postalCode": {
                        "title": "Postal code",
                        "type": "string",
                        "description": "The postal code of the location. Postal codes are not available for all countries. In some countries, this will only contain part of the postal code."
                      },
                      "primary": {
                        "title": "Primary",
                        "type": "boolean",
                        "description": "Primary address indicator. A profile can have only one `primary` address at a given point of time."
                      },
                      "region": {
                        "title": "Region",
                        "type": "string",
                        "description": "The region, county, or district portion of the address."
                      },
                      "repositoryCreatedBy": {
                        "title": "Created by user identifier",
                        "type": "string",
                        "description": "User ID of who created the record."
                      },
                      "repositoryLastModifiedBy": {
                        "title": "Modified by user identifier",
                        "type": "string",
                        "description": "User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`."
                      },
                      "state": {
                        "title": "State",
                        "type": "string",
                        "description": "The name of the State. This is a free-form field."
                      },
                      "stateProvince": {
                        "title": "State or province",
                        "type": "string",
                        "description": "The state, or province portion of the observation. The format follows the [ISO 3166-2 (country and subdivision)][http://www.unece.org/cefact/locode/subdivisions.html] standard.",
                        "pattern": "([A-Z]{2}-[A-Z0-9]{1,3}|)"
                      },
                      "status": {
                        "title": "Status",
                        "type": "string",
                        "description": "An indication as to the ability to use the address."
                      },
                      "statusReason": {
                        "title": "Status reason",
                        "type": "string",
                        "description": "A description of the current status."
                      },
                      "street1": {
                        "title": "Street 1",
                        "type": "string",
                        "description": "Primary street level information, apartment number, street number, and street name."
                      },
                      "street2": {
                        "title": "Street 2",
                        "type": "string",
                        "description": "Optional street information second line."
                      },
                      "street3": {
                        "title": "Street 3",
                        "type": "string",
                        "description": "Optional street information third line."
                      },
                      "street4": {
                        "title": "Street 4",
                        "type": "string",
                        "description": "Optional street information fourth line."
                      }
                    }
                  },
                  "currencyCode": {
                    "title": "Currency code",
                    "type": "string",
                    "pattern": "^[A-Z]{3}$",
                    "description": "The ISO 4217 alphabetic currency code used for pricing the product."
                  },
                  "shipDate": {
                    "title": "Ship Date",
                    "type": "string",
                    "format": "date-time",
                    "description": "The date when one or more items from an order is shipped. "
                  },
                  "shippingAmount": {
                    "title": "Shipping Amount",
                    "type": "number",
                    "description": "The amount the customer had to pay for shipping."
                  },
                  "shippingDestination": {
                    "title": "Shipping Destination",
                    "type": "string",
                    "description": "The ship-to  destination specified by the user. It could be home, store etc.",
                    "enum": [
                      "home",
                      "store"
                    ]
                  },
                  "shippingMethod": {
                    "title": "Shipping Method",
                    "type": "string",
                    "description": "The method of shipping chosen by the customer, such as standard delivery, expedited delivery, pick up in store, etc."
                  },
                  "trackingNumber": {
                    "title": "Tracking Number",
                    "type": "number",
                    "description": "The tracking number provided by the shipping carrier for a order item shipment."
                  },
                  "trackingURL": {
                    "title": "Tracking URL",
                    "type": "string",
                    "description": "The URL to track the shipping status of an order item."
                  }
                }
              }
            }
          },
          "eventMergeId": {
            "title": "ExperienceEvent merge ID",
            "description": "An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.",
            "type": "string"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string",
            "description": "The primary event type for this time-series record."
          },
          "identityMap": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "type": "object",
                "meta:xdmType": "object",
                "properties": {
                  "authenticatedState": {
                    "description": "The state this identity is authenticated as for this observed ExperienceEvent.",
                    "type": "string",
                    "default": "ambiguous",
                    "enum": [
                      "ambiguous",
                      "authenticated",
                      "loggedOut"
                    ],
                    "meta:enum": {
                      "ambiguous": "Ambiguous",
                      "authenticated": "User identified by a login or similar action that was valid at the time of the event observation.",
                      "loggedOut": "User was identified by a login action at some point of time previously, but is not currently logged in."
                    },
                    "meta:xdmType": "string",
                    "meta:xdmField": "xdm:authenticatedState"
                  },
                  "id": {
                    "title": "Identifier",
                    "type": "string",
                    "description": "Identity of the consumer in the related namespace.",
                    "meta:xdmType": "string",
                    "meta:xdmField": "xdm:id"
                  },
                  "primary": {
                    "title": "Primary",
                    "type": "boolean",
                    "default": false,
                    "description": "Indicates this identity is the preferred identity. Is used as a hint to help systems better organize how identities are queried.",
                    "meta:xdmType": "boolean",
                    "meta:xdmField": "xdm:primary"
                  }
                },
                "meta:referencedFrom": "https://ns.adobe.com/xdm/context/identityitem"
              },
              "meta:xdmType": "array"
            }
          },
          "producedBy": {
            "title": "Produced By",
            "description": "Value that describes the producer of the event - suggested values would be 'self', 'system', 'salesRep', etc. Can be used to filter out certain producers if needed.",
            "type": "string"
          },
          "productListItems": {
            "title": "Product list items",
            "type": "array",
            "description": "A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.",
            "items": {
              "type": "object",
              "properties": {
                "_id": {
                  "title": "Line item ID.",
                  "type": "string",
                  "format": "uri-reference",
                  "description": "The line item identifier for this product entry. The product itself is identified through `xdm:product`."
                },
                "SKU": {
                  "title": "SKU",
                  "type": "string",
                  "description": "Stock keeping unit (SKU), the unique identifier for a product defined by the vendor."
                },
                "currencyCode": {
                  "title": "Currency code",
                  "type": "string",
                  "pattern": "^[A-Z]{3}$",
                  "description": "The ISO 4217 alphabetic currency code used for pricing the product."
                },
                "discountAmount": {
                  "title": "Discount Amount",
                  "type": "number",
                  "description": "The difference between the regular price and the special price for the product."
                },
                "name": {
                  "title": "Name",
                  "type": "string",
                  "description": "The display name for the product as presented to the user for this product view."
                },
                "priceTotal": {
                  "title": "Price total",
                  "type": "number",
                  "description": "The total price for the product line item."
                },
                "product": {
                  "title": "Product",
                  "type": "string",
                  "format": "uri",
                  "description": "The XDM identifier of the product itself."
                },
                "productAddMethod": {
                  "title": "Product add method",
                  "type": "string",
                  "description": "The method that was used to add a product item to the list by the visitor. Set with product list add metrics."
                },
                "productCategories": {
                  "title": "Product categories",
                  "type": "array",
                  "description": "List of category data this product falls under",
                  "items": {
                    "type": "object",
                    "properties": {
                      "categoryID": {
                        "title": "Category identifier.",
                        "type": "string"
                      },
                      "categoryName": {
                        "title": "Category name",
                        "type": "string"
                      },
                      "categoryPath": {
                        "title": "Category path",
                        "type": "string"
                      }
                    }
                  }
                },
                "productImageUrl": {
                  "title": "Product Image URL",
                  "type": "string",
                  "description": "Product main image URL."
                },
                "quantity": {
                  "title": "Quantity",
                  "type": "integer",
                  "description": "The number of units the customer has indicated they require of the product."
                },
                "refundAmount": {
                  "title": "Refund Amount",
                  "type": "number",
                  "description": "Amount refunded for item, if any."
                },
                "returnItem": {
                  "title": "Return Item",
                  "description": "RMA (Return Merchandise Authorization) information for this item.",
                  "type": "object",
                  "properties": {
                    "returnItemCondition": {
                      "title": "Return Item Condition",
                      "type": "string",
                      "description": "Condition of item that return is requested for."
                    },
                    "returnQuanitityAuthorized": {
                      "title": "Return Quantity Authorized",
                      "type": "integer",
                      "description": "Number of this item authorized to be returned."
                    },
                    "returnQuantityApproved": {
                      "title": "Return Quantity Approved",
                      "type": "integer",
                      "description": "Number of this item with return fully complete and approved."
                    },
                    "returnQuantityAuthorized": {
                      "title": "Return Quantity Authorized",
                      "type": "integer",
                      "description": "Number of this item authorized to be returned."
                    },
                    "returnQuantityReceived": {
                      "title": "Return Quantity Received",
                      "type": "integer",
                      "description": "Number of returned items received."
                    },
                    "returnQuantityRequested": {
                      "title": "Return Quantity Requested",
                      "type": "integer",
                      "description": "Number of this item that the shopper requested to return."
                    },
                    "returnReason": {
                      "title": "Return Reason",
                      "type": "string",
                      "description": "Reason why return is requested for item."
                    },
                    "returnResolution": {
                      "title": "Return Resolution",
                      "type": "string",
                      "description": "Requested resolution of item return (e.g. Refund, Exchange)"
                    },
                    "returnStatus": {
                      "title": "Return Status",
                      "type": "string",
                      "description": "Status of returned item (e.g. Pending, Approved)."
                    }
                  }
                },
                "selectedOptions": {
                  "title": "Selected Options",
                  "type": "array",
                  "description": "Particular options chosen for a configurable product.",
                  "items": {
                    "type": "object",
                    "title": "Selected option",
                    "description": "Selected option for one attribute of a configurable product",
                    "properties": {
                      "attribute": {
                        "title": "Configurable attribute name",
                        "description": "The name of the configurable attribute",
                        "type": "string"
                      },
                      "value": {
                        "title": "Selected option value",
                        "description": "The value chosen for the configurable attribute",
                        "type": "string"
                      }
                    },
                    "required": [
                      "attribute",
                      "value"
                    ]
                  }
                },
                "unitOfMeasureCode": {
                  "title": "Product Unit Of Measure Code",
                  "type": "string",
                  "description": "Standard unit of measure of the product and or variation and relates the units for the size measurement."
                }
              },
              "required": [
                "SKU"
              ]
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "isPaid": {
                "title": "Is paid",
                "type": "boolean",
                "description": "Indicate if the search is paid or not."
              },
              "keywords": {
                "title": "Keywords",
                "type": "string",
                "description": "Keywords for the search."
              },
              "pageDepth": {
                "title": "Page depth",
                "type": "integer",
                "description": "Page depth in the search results."
              },
              "position": {
                "title": "Listing position",
                "type": "integer",
                "description": "Position or rank of the listing in the search result page."
              },
              "searchEngine": {
                "title": "Search engine",
                "type": "string",
                "description": "The search engine used by the search."
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "type": "string",
                "format": "uri",
                "description": "The application specified identifier used to identify the search engine used by the search."
              },
              "slot": {
                "title": "Page slot",
                "type": "string",
                "description": "Named section of the page where the search result appeared, for example, top or side."
              }
            }
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time",
            "description": "The time when an event or observation occurred."
          },
          "web": {
            "title": "Web",
            "description": "Link clicks, web page details, referrer information, and browser details.",
            "type": "object",
            "properties": {
              "webInteraction": {
                "title": "Web interaction",
                "type": "object",
                "description": "Details about the web link or URL that corresponds to where the interaction occurred.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The actual link or URL used for this web interaction."
                  },
                  "linkClicks": {
                    "title": "Link Clicks",
                    "description": "Click of a web link has occurred.",
                    "type": "object",
                    "properties": {
                      "id": {
                        "title": "Unique Identifier",
                        "type": "string",
                        "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                      },
                      "value": {
                        "type": "number",
                        "description": "The quantifiable value of this measure."
                      }
                    },
                    "required": [
                      "value"
                    ]
                  },
                  "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "The normative name used for this web link, used for classification purposes."
                  },
                  "region": {
                    "title": "Region",
                    "type": "string",
                    "description": "The region name represents the region or area of a document that the web link belongs to such as header or footer."
                  },
                  "type": {
                    "title": "Type",
                    "type": "string",
                    "description": "The link type.",
                    "enum": [
                      "download",
                      "exit",
                      "other"
                    ]
                  }
                }
              },
              "webPageDetails": {
                "title": "Web page details",
                "type": "object",
                "description": "Details about the web page where the web interaction occurred.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`."
                  },
                  "isErrorPage": {
                    "title": "Is error page",
                    "type": "boolean",
                    "description": "Flag that indicate if the page is error page or not.  Error here is defined by the application, and may nor may not correspond to a page served with an HTTP error code.  This flag is used to broadly categorize web interactions."
                  },
                  "isHomePage": {
                    "title": "Is home page",
                    "type": "boolean",
                    "description": "Flag that indicate if the page is the site home page or not.  The definition of home page is determined by the application, but is commonly used to designate a top level landing page or common site entry point.  This flag is used to broadly categorize web interactions."
                  },
                  "isPreRendered": {
                    "title": "Is pre-rendered",
                    "type": "boolean",
                    "description": "Flag that indicates if the page has been pre-rendered or partially pre-rendered prior to being viewed."
                  },
                  "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes."
                  },
                  "pageViews": {
                    "title": "Page Views",
                    "description": "View(s) of a webpage has occurred.",
                    "type": "object",
                    "properties": {
                      "id": {
                        "title": "Unique Identifier",
                        "type": "string",
                        "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                      },
                      "value": {
                        "type": "number",
                        "description": "The quantifiable value of this measure."
                      }
                    },
                    "required": [
                      "value"
                    ]
                  },
                  "server": {
                    "title": "Server",
                    "type": "string",
                    "description": "The normative or usual server that hosts the web page.  This may or may not be the host or server that actually served the page interaction, but is used for classification purposes."
                  },
                  "siteSection": {
                    "title": "Site section",
                    "type": "string",
                    "description": "The normative name of the site section where this web page resides, which may be used to classify or categorize the interaction."
                  },
                  "viewName": {
                    "title": "View Name",
                    "type": "string",
                    "description": "The name of the view, within a page. This is commonly used with Single Page Applications or pages that have tabs or controls that change a majority of the page layout."
                  }
                }
              },
              "webReferrer": {
                "title": "Web referrer",
                "type": "object",
                "description": "The referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The referrer URL."
                  },
                  "type": {
                    "title": "Type",
                    "type": "string",
                    "description": "The referrer type.",
                    "enum": [
                      "internal",
                      "external",
                      "search_engine",
                      "typed_bookmarked",
                      "email",
                      "social",
                      "usenet",
                      "hard_drive",
                      "nojs",
                      "conversational_ai",
                      "unknown"
                    ]
                  }
                }
              }
            }
          }
        },
        "required": [
          "_id",
          "timestamp"
        ],
        "additionalProperties": true
      },
      "tgt_product_lookup": {
        "title": "retail.web.product-lookup",
        "type": "object",
        "description": "Product Catalog Lookup — composed by xdm-accelerator from catalog retail.web@1.0.0.",
        "properties": {
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "product": {
                "type": "object",
                "properties": {
                  "sku": {
                    "title": "sku",
                    "type": "string",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers."
                  },
                  "name": {
                    "title": "name",
                    "type": "string",
                    "description": "The name of the item."
                  },
                  "price": {
                    "title": "price",
                    "type": "number",
                    "description": "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\\n\\nUsage guidelines:\\n\\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. \"USD\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. \"BTC\"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. \"Ithaca HOUR\") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a \"content=\" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n      "
                  },
                  "category": {
                    "title": "category",
                    "type": "string",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy."
                  },
                  "dimensions": {
                    "type": "object",
                    "properties": {
                      "width": {
                        "title": "width",
                        "type": "number",
                        "description": "The width of the item."
                      },
                      "height": {
                        "title": "height",
                        "type": "number",
                        "description": "The height of the item."
                      },
                      "depth": {
                        "title": "depth",
                        "type": "number",
                        "description": "The depth of the item."
                      }
                    }
                  },
                  "internalScore": {
                    "title": "internalScore",
                    "type": "number"
                  }
                },
                "required": [
                  "sku"
                ]
              }
            },
            "required": [
              "product"
            ]
          },
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference",
            "description": "A unique identifier for the record."
          }
        },
        "required": [
          "_aeppsemea"
        ],
        "additionalProperties": true
      }
    }
  }
};
