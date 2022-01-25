import sanityClinet from "@sanity/client";

export const client = sanityClinet({
  projectId: "ldm7dpmf",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk0toLwFpIKZEzEYFSLGn8UGDT65X9aEn5tQft8U8a5eI39GyD4dA6c6aH8h5TPcb7C2dtHN63QbSAbn0R4C40JnEp87Xk6RvPP4vRt767FoyTWD3Gtp7rr0xR1UfvUy7IrKKuhNjC89jp5jXzoiTwtCNgBunWgmAeXSdAjSagof3nMbx6bG",
  useCdn: false,
});
