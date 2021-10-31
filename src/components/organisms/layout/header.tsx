import { memo, useCallback, VFC } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";


export const Header: VFC = memo(() => {
	const history = useHistory();
	const onClickHome = useCallback(()=> history.push("/home"),[]);

	return(
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
		</Flex>
	);
});
