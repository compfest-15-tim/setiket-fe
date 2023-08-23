<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
<<<<<<< HEAD
import * as React from "react";

import { cn } from "@/lib/utils";
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> 96a1819e65228816a4ff70ff6339b40f9acceab8
>>>>>>> 419a4e71d1e3fc67afb05afdf30c51221aa7dc51

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    )
=======
<<<<<<< HEAD
    );
>>>>>>> 419a4e71d1e3fc67afb05afdf30c51221aa7dc51
  }
)
Input.displayName = "Input"

<<<<<<< HEAD
export { Input }
=======
export { Input };
=======
    )
  }
)
Input.displayName = "Input"

export { Input }
>>>>>>> 96a1819e65228816a4ff70ff6339b40f9acceab8
>>>>>>> 419a4e71d1e3fc67afb05afdf30c51221aa7dc51
