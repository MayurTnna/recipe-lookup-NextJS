import { ChakraProvider } from "@chakra-ui/react";
import { Box, Center, Heading, Stack, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useSelector } from "react-redux";
const FoodDescriptionList = () => {
  const items = useSelector((state) => state.nextReducer.posts.data);
  const loading = useSelector((state) => state.nextReducer.loading);
  console.log(loading);
  return (
    <>
      {loading || items === null ? (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="row">
          {items &&
            items.data.meals.map((item) => {
              return (
                <ChakraProvider>
                  <div className="col col-lg-3 col-md-4 col-sm-6">
                    <Link href={`/type/id/${item.idMeal}`}>
                      <Center py={12}>
                        <Box
                          role={"group"}
                          p={6}
                          maxW={"330px"}
                          minH={"400px"}
                          w={"full"}
                          bg={"white"}
                          boxShadow={"2xl"}
                          rounded={"lg"}
                          pos={"relative"}
                          zIndex={1}
                        >
                          <Box
                            rounded={"lg"}
                            mt={-12}
                            pos={"relative"}
                            height={"230px"}
                            _after={{
                              transition: "all .3s ease",
                              content: '""',
                              w: "full",
                              h: "full",
                              pos: "absolute",
                              top: 5,
                              left: 0,
                              backgroundImage: `url(${item.strMealThumb})`,
                              filter: "blur(15px)",
                              zIndex: -1,
                            }}
                            _groupHover={{
                              _after: {
                                filter: "blur(20px)",
                              },
                            }}
                          >
                            <Image
                              rounded={"lg"}
                              height={230}
                              width={282}
                              objectFit={"cover"}
                              src={item.strMealThumb}
                            />
                          </Box>
                          <Stack pt={10} align={"center"}>
                            <Heading
                              fontSize={"2xl"}
                              fontFamily={"body"}
                              fontWeight={500}
                            >
                              {item.strMeal}
                            </Heading>
                            <Button
                              w={"full"}
                              mt={8}
                              bg={("#151f21", "gray.900")}
                              color={"white"}
                              rounded={"md"}
                              _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                              }}
                            >
                              View more
                            </Button>
                          </Stack>
                        </Box>
                      </Center>
                    </Link>
                  </div>
                </ChakraProvider>
              );
            })}
        </div>
      )}
    </>
  );
};
export default FoodDescriptionList;
