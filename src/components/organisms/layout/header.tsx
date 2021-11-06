import { memo, useCallback, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { 
	Flex, 
	Heading, 
	Box, 
	Link, 
	IconButton, 
	Button, 
	useDisclosure,
	Drawer, 
	DrawerOverlay, 
	DrawerContent, 
	DrawerBody 
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";

export const Header: VFC = memo(() => {
	const history = useHistory();
	const onClickHome = useCallback(()=> history.push("/home"),[]);
	const onClickSalesToday = useCallback(()=>history.push("/home/"),[]);
	const onClickSalesUpdate = useCallback(()=>history.push("/home/update"),[]);
	const onClickSetting = useCallback(()=>history.push("/home/setting"),[]);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return(
		<>
		<Flex
			as="nav"
			bg="cyan.500"
			color="gray.50"
			align="center"
			justify="space-between"
			padding={{base: 3, md: 5}}
		>
			<Flex
				align="center"
				as="a"
				mr={8}
				_hover={{cursor: "pointer"}}
				onClick={onClickHome}
			>
				<Heading as="h1" fontSize={{base: "md", md: "lg"}}>
					OSAKANA-NET/SALES
				</Heading>
			</Flex>
			<Flex
				align="center"
				fontSize="sm"
				display={{ base: "none", md: "flex" }}
				flexGrow={2}
			>
				<Box pr={4}>
 					<Link onClick={onClickSalesToday}>当日売上</Link>
				</Box>
				<Box pr={4}>
					<Link onClick={onClickSalesUpdate}>売上修正</Link>
				</Box>
				<Box>
					<Link onClick={onClickSetting}>設定</Link>
				</Box>
			</Flex>
			<MenuIconButton onOpen={onOpen} />
		</Flex>
		<Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerBody p={0} bg="gray.100">
						<Button onClick={ onClickSalesToday } w="100%">当日売上</Button>
						<Button onClick={ onClickSalesUpdate
						} w="100%">売上修正</Button>
						<Button onClick={ onClickSetting } w="100%">設定</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
		</>
	);
});
