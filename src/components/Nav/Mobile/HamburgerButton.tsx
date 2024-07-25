import { forwardRef } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

import { HAMBURGER_BUTTON_ID } from "@/lib/constants"

import {
  Button,
  type ButtonProps,
} from "../../../../tailwind/ui/buttons/Button"

const hamburgerSvg =
  "M 2 13 l 10 0 l 0 0 l 10 0 M 4 19 l 8 0 M 12 19 l 8 0 M 2 25 l 10 0 l 0 0 l 10 0"
const glyphSvg =
  "M 2 19 l 10 -14 l 0 0 l 10 14 M 2 19 l 10 7 M 12 26 l 10 -7 M 2 22 l 10 15 l 0 0 l 10 -15"

const hamburgerVariants = {
  closed: { d: hamburgerSvg, transition: { duration: 0.25 } },
  open: { d: glyphSvg, transition: { duration: 0.25 } },
}

type HamburgerProps = ButtonProps & {
  isMenuOpen: boolean
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ isMenuOpen, ...props }, ref) => {
    const { t } = useTranslation("common")

    return (
      <Button
        ref={ref}
        id={HAMBURGER_BUTTON_ID}
        aria-label={t("aria-toggle-search-button")}
        className="px-0 text-body"
        variant="ghost"
        {...props}
      >
        <svg
          viewBox="0 0 24 40"
          className="relative mx-2 h-10 w-6 stroke-body stroke-2 hover:stroke-primary hover:text-primary [&>path]:fill-none hover:[&>path]:stroke-primary"
        >
          <motion.path
            variants={hamburgerVariants}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          />
        </svg>
      </Button>
    )
  }
)

HamburgerButton.displayName = "HamburgerButton"

export default HamburgerButton
