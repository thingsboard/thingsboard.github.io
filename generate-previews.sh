dir="$1"
filter="$2"
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
BROWN='\033[0;33m'
NC='\033[0m'
[ $# -eq 0 ] && { echo "Usage: $0 path_to_folder filter"; exit 1; }
[ -z "$2" ] && { echo "Filter not provided and was set to default *.png"; filter="*.png"; }

# Check if mogrify installed
if ! command -v mogrify &> /dev/null
then
    echo "'mogrify' not found"
    echo "To install it use the command:"
    echo "sudo apt install graphicsmagick-imagemagick-compat"
    exit 1
fi

if [ -d "$dir" -a ! -h "$dir" ]
then
   echo -e "${YELLOW}$dir${GREEN} found. Processing...${NC}"
    for file in $dir/$filter; do
        if [ "$(basename $file)" == $filter ]; then
            echo -e "${RED}Can not find files with $filter extension in ${YELLOW}$dir${NC}"
            exit 0
        fi
        echo
        echo -e "${BROWN}###################################################################${NC}"
        if file "$file" | grep -vE 'preview' | grep -E $filter; then
            echo -e "${GREEN}File ${BLUE}$(basename $file)${GREEN} is PNG image. Perform creating preview...${NC}"
            oldFilePath="$(dirname $file)/$(basename $file)"
            previewFilePath="$(dirname $file)/$(basename $file ${filter#\*})-preview${filter#\*}"
            # Perform the copying and make the preview file, if copying successful
            cp $oldFilePath $previewFilePath && mogrify -resize 'x115' $previewFilePath
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
