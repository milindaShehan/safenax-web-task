import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from "@nextui-org/react";
import Logo from "../../public/FRESHBOWL.svg";
import { FaChevronDown } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";

export default function App() {
    return (
        <Navbar maxWidth="2xl" className="px-10">
            <NavbarContent className="gap-8" justify="start">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" radius="full" className="bg-primary text-white">
                        Home
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground" aria-current="page">
                        Menu
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Recipes
                                <FaChevronDown />
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="Recipe categories" className="w-[340px]" itemClasses={{ base: "gap-4" }}>
                        <DropdownItem key="smoothies" description="Discover refreshing smoothie recipes with fresh ingredients.">
                            Smoothies
                        </DropdownItem>
                        <DropdownItem key="bowls" description="Explore nutrient-packed bowls perfect for any meal.">
                            Healthy Bowls
                        </DropdownItem>
                        <DropdownItem key="salads" description="Crisp and delicious salads with a variety of flavors.">
                            Salads
                        </DropdownItem>
                        <DropdownItem key="breakfast" description="Wholesome breakfast options to start your day right.">
                            Breakfast
                        </DropdownItem>
                        <DropdownItem key="snacks" description="Quick and easy snacks for a healthy energy boost.">
                            Snacks
                        </DropdownItem>
                        <DropdownItem key="desserts" description="Indulge in guilt-free desserts that satisfy your sweet tooth.">
                            Desserts
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* Centered Logo */}
            <NavbarContent justify="center">
                <NavbarItem>
                    <img src={Logo} alt="Logo" className="h-8" />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="#" variant="bordered" color="black" radius="full" className="border-black border-[0.5px] text-black">
                        Contact
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <div className="rounded-full p-3 bg-black flex items-center justify-center">
                        <CiBellOn className="text-white text-xl" />
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
