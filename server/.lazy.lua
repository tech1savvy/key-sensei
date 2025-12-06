-- .nvim.lua
return {
	"stevearc/conform.nvim",
	opts = {
		formatters_by_ft = {
			javascript = { "biome" }, -- replaces all previous
		},
	},
}
