require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def initialize_git_repository
      run 'git init'
      run 'git add .'
    end

    def run_yarn_install
      run 'yarn install'
    end

    def initialize_tailwind_config
      run 'yarn tailwind init tailwind.js'
      run 'git add tailwind.js'
    end
  end
end
