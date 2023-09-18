dir="$1"
filter="$2"
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
BROWN='\033[0;33m'
NC='\033[0m'
[ $# -eq 0 ] && { echo "Usage: $0 path_to_folder filter"; exit 1; }
 
if [ -d "$dir" -a ! -h "$dir" ]
then
   echo -e "${YELLOW}$dir${GREEN} found. Processing...${NC}"
    for file in $dir/*.png; do
        if [ "$(basename $file)" == "*.png" ]; then
            echo -e "${RED}Can not find files with PNG extension in ${YELLOW}$dir${NC}"
            exit 0
        fi
        echo
        echo -e "${BROWN}###################################################################${NC}"
        if file "$file" | grep -vE 'preview' | grep -E $filter | grep -qE 'png'; then
            echo -e "${GREEN}File ${BLUE}$(basename $file)${GREEN} is PNG image. Perform creating preview...${NC}"
            oldFilePath="$(dirname $file)/$(basename $file)"
            previewFilePath="$(dirname $file)/$(basename $file .png)-preview.png"
            # Perform the copying and make the preview file, if copying successful
            cp $oldFilePath $previewFilePath && mogrify -resize 10% $previewFilePath
            if file $previewFilePath | grep -qE 'PNG'; then
                echo -e "${GREEN}Preview  image ${BLUE}$previewFilePath${GREEN} created.${NC}"
            else
                echo -e "${RED}Preview  image ${BLUE}$(basename $file)${RED} not created.${NC}"
            fi
        else
            echo -e "${RED}File ${BLUE}$(basename $file)${RED} is not valid PNG image or you have not read permissions. Skiped.${NC}"
        fi
        echo -e "${BROWN}###################################################################${NC}"
    done
else
   echo -e "${RED}Error: ${YELLOW}$dir${RED} path not found or is symlink to ${YELLOW}$(readlink -f ${dir}).${NC}"
fi
