const tDataPermissions = [
  "product_group",
  "brand",
  "role",
  "user",
  "supplier",
  "stock",
  "product_model",
  "product_category",
];

const tDataRoles = [
  {
    id: 1,
    role: "superadmin",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
  {
    id: 2,
    role: "Admin",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
  {
    id: 3,
    role: "Manager",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
];

const tDataUsers = [
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
];

export { tDataPermissions, tDataRoles, tDataUsers };
