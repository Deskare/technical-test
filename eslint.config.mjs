import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}']
    },
    {
        name: 'app/files-to-ignore',
        ignores: [
            '**/bootstrap/**',
            '**/vendor/**',
            '**/node_modules/**',
            '**/public/**',
            'tailwind.config.cjs',
        ]
    },
    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommendedTypeChecked,
    skipFormatting,
    {
        rules: {
            'vue/block-lang': [
                'error',
                {
                    script: {
                        lang: 'ts',
                        allowNoLang: true
                    }
                }
            ],
            '@typescript-eslint/no-explicit-any': ['warn']
        }
    },
    oxlint.configs['flat/recommended']
)
