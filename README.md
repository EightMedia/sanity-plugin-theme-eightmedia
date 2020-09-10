# Eightmedia theme for Sanity CMS

```
> sanity install @eightmedia/sanity-plugin-theme-eightmedia
```

## Icons

Recommended icons: [TeenyIcons](https://teenyicons.com/)

```
> yarn add --dev @iconify/react
> yarn add --dev @iconify/icons-teenyicons
```


```js
import React from "react";
import { Icon } from "@iconify/react";
import briefcase from "@iconify/icons-teenyicons/briefcase-outline";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: () => <Icon icon={briefcase} width={15} height={15} />,
}

 ```

[TeenyIcons React](https://www.npmjs.com/package/@iconify/icons-teenyicons)