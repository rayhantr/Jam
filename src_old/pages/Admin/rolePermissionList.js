export const permissionList = [
	{
		permission: "website settings",
		subPermissions: [{ permValue: "website_settings.index", permName: "index", icon: "edit" }],
	},
	{
		permission: "admin",
		subPermissions: [
			{ permValue: "admin.create", permName: "create", icon: "edit" },
			{ permValue: "admin.edit", permName: "edit", icon: "edit" },
			{ permValue: "admin.update", permName: "update", icon: "edit" },
			{ permValue: "admin.delete", permName: "delete", icon: "edit" },
			{ permValue: "admin.list", permName: "list", icon: "edit" },
		],
	},
	{
		permission: "blog",
		subPermissions: [
			{ permValue: "blog.create", permName: "create", icon: "edit" },
			{ permValue: "blog.edit", permName: "edit", icon: "edit" },
			{ permValue: "blog.delete", permName: "delete", icon: "edit" },
			{ permValue: "blog.index", permName: "index", icon: "edit" },
		],
	},
	{
		permission: "dashboard",
		subPermissions: [{ permValue: "dashboard.index", permName: "index", icon: "edit" }],
	},
	{
		permission: "gateway",
		subPermissions: [
			{ permValue: "gateway.edit", permName: "edit", icon: "edit" },
			{ permValue: "gateway.index", permName: "index", icon: "edit" },
		],
	},
	{
		permission: "language",
		subPermissions: [
			{ permValue: "language.create", permName: "create", icon: "edit" },
			{ permValue: "language.edit", permName: "edit", icon: "edit" },
			{ permValue: "language.delete", permName: "delete", icon: "edit" },
			{ permValue: "language.index", permName: "index", icon: "edit" },
		],
	},
	{ permission: "option" },
	{
		permission: "order",
		subPermissions: [
			{ permValue: "order.create", permName: "create", icon: "edit" },
			{ permValue: "order.edit", permName: "edit", icon: "edit" },
			{ permValue: "order.delete", permName: "delete", icon: "edit" },
			{ permValue: "order.index", permName: "index", icon: "edit" },
			{ permValue: "order.activate", permName: "activate", icon: "edit" },
			{ permValue: "order.deactivate", permName: "deactivate", icon: "edit" },
			{ permValue: "order.alert", permName: "alert", icon: "edit" },
		],
	},
	{
		permission: "page",
		subPermissions: [
			{ permValue: "page.create", permName: "create", icon: "edit" },
			{ permValue: "page.edit", permName: "edit", icon: "edit" },
			{ permValue: "page.delete", permName: "delete", icon: "edit" },
			{ permValue: "page.index", permName: "index", icon: "edit" },
		],
	},
	{
		permission: "plan",
		subPermissions: [
			{ permValue: "plan.create", permName: "create", icon: "edit" },
			{ permValue: "plan.edit", permName: "edit", icon: "edit" },
			{ permValue: "plan.delete", permName: "delete", icon: "edit" },
			{ permValue: "plan.index", permName: "index", icon: "edit" },
		],
	},
	{ permission: "report" },
	{
		permission: "review",
		subPermissions: [
			{ permValue: "review.create", permName: "create", icon: "edit" },
			{ permValue: "review.edit", permName: "edit", icon: "edit" },
			{ permValue: "review.delete", permName: "delete", icon: "edit" },
			{ permValue: "review.index", permName: "index", icon: "edit" },
		],
	},
	{
		permission: "role",
		subPermissions: [
			{ permValue: "role.create", permName: "create", icon: "edit" },
			{ permValue: "role.edit", permName: "edit", icon: "edit" },
			{ permValue: "role.update", permName: "update", icon: "edit" },
			{ permValue: "role.delete", permName: "delete", icon: "edit" },
			{ permValue: "role.list", permName: "list", icon: "edit" },
		],
	},
	{
		permission: "settings",
		subPermissions: [
			{ permValue: "settings.system", permName: "system", icon: "edit" },
			{ permValue: "settings.seo", permName: "seo", icon: "edit" },
			{ permValue: "settings.menu", permName: "menu", icon: "edit" },
		],
	},
	{
		permission: "support",
		subPermissions: [
			{ permValue: "support.create", permName: "create", icon: "edit" },
			{ permValue: "support.edit", permName: "edit", icon: "edit" },
			{ permValue: "support.delete", permName: "delete", icon: "edit" },
			{ permValue: "support.index", permName: "index", icon: "edit" },
		],
	},
	{ permission: "title" },
	{ permission: "transaction" },
	{
		permission: "users",
		subPermissions: [
			{ permValue: "user.create", permName: "create", icon: "edit" },
			{ permValue: "user.edit", permName: "edit", icon: "edit" },
			{ permValue: "user.delete", permName: "delete", icon: "edit" },
			{ permValue: "user.index", permName: "index", icon: "edit" },
			{ permValue: "user.verified", permName: "verified", icon: "edit" },
			{ permValue: "user.unverified", permName: "unverified", icon: "edit" },
			{ permValue: "user.show", permName: "show", icon: "edit" },
			{ permValue: "user.banned", permName: "banned", icon: "edit" },
			{ permValue: "user.mail", permName: "mail", icon: "edit" },
			{ permValue: "user.invoice", permName: "invoice", icon: "edit" },
		],
	},
	{
		permission: "web",
		subPermissions: [
			{ permValue: "web.analytic", permName: "analytic", icon: "edit" },
			{ permValue: "web.about", permName: "about", icon: "edit" },
			{ permValue: "web.header", permName: "header", icon: "edit" },
			{ permValue: "web.feature", permName: "feature", icon: "edit" },
		],
	},
];
