-- This project-specific Neovim config file enables CSS language features
-- (like "go to definition" and "hover") for HTML and JSX files by
-- specifying the project's stylesheets.

-- Project-specific HTML/CSS configuration
vim.g.html_css = {
	enable_on = { "html", "jsx" }, -- File types for this project only
	handlers = {
		definition = {
			bind = "gd",
		},
		hover = {
			bind = "K",
			wrap = true,
			border = "none",
			position = "cursor",
		},
	},
	documentation = {
		auto_show = true,
	},
	style_sheets = {
		-- Project-specific stylesheets
		"./src/index.css",
		"./src/App.css",
		"./node_modules/bootstrap/dist/css/bootstrap.css",
	},
}